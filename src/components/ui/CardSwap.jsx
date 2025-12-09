import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
    <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i
});
const placeNow = (el, slot, skew) =>
    gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skew,
        transformOrigin: 'center center',
        zIndex: slot.zIndex,
        force3D: true
    });

const CardSwap = ({
                      width = 500,
                      height = 400,
                      cardDistance = 60,
                      verticalDistance = 70,
                      delay = 5000,
                      onCardClick,
                      skewAmount = 6,
                      easing = 'elastic',
                      children
                  }) => {
    const childArr = Children.toArray(children);
    const refs = useRef(childArr.map(() => React.createRef()));
    const order = useRef(childArr.map((_, i) => i));
    const container = useRef(null);
    const tl = useRef(null);

    const config =
        easing === 'elastic'
            ? { ease: 'elastic.out(0.6,0.9)', durDrop: 2, durMove: 2, durReturn: 2, promoteOverlap: 0.9, returnDelay: 0.05 }
            : { ease: 'power1.inOut', durDrop: 0.8, durMove: 0.8, durReturn: 0.8, promoteOverlap: 0.45, returnDelay: 0.2 };

    useEffect(() => {
        const total = refs.current.length;

        // initial placement
        refs.current.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

        // build single timeline that repeats
        tl.current = gsap.timeline({ repeat: -1 });
        const swapTimeline = () => {
            if (order.current.length < 2) return;

            const [front, ...rest] = order.current;
            const elFront = refs.current[front].current;

            tl.current.to(elFront, { y: '+=500', duration: config.durDrop, ease: config.ease });

            tl.current.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
            rest.forEach((idx, i) => {
                const el = refs.current[idx].current;
                const slot = makeSlot(i, cardDistance, verticalDistance, total);
                tl.current.set(el, { zIndex: slot.zIndex }, 'promote');
                tl.current.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`);
            });

            const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
            tl.current.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
            tl.current.set(elFront, { zIndex: backSlot.zIndex }, 'return');
            tl.current.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, 'return');

            order.current = [...rest, front];
        };

        // initial swap call
        swapTimeline();

        // optional: could trigger swapTimeline on interval or gsap timeline repeat
    }, [cardDistance, verticalDistance, skewAmount, easing, config.durDrop, config.durMove, config.durReturn]);

    const rendered = childArr.map((child, i) =>
        isValidElement(child)
            ? cloneElement(child, {
                key: i,
                ref: refs.current[i],
                style: { width, height, ...(child.props.style ?? {}) },
                onClick: e => {
                    child.props.onClick?.(e);
                    onCardClick?.(i);
                }
            })
            : child
    );

    return (
        <div ref={container} className="card-swap-container" style={{ width, height }}>
            {rendered}
        </div>
    );
};

export default CardSwap;
