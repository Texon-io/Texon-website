function Line({
                  orientation = "horizontal",
                  left = "0",
                  right = "0",
                  top = "0",
                  bottom = "0",
                  thickness = "1px",
                  color = "bg-gray-500",
                  className = "",
              }) {
    const style =
        orientation === "horizontal"
            ? { left, right, top, height: thickness }
            : { top, bottom, left, width: thickness };

    return <div className={`absolute ${color} opacity-35 ${className}`} style={style}></div>;
}

export default Line;
