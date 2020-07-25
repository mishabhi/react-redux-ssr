import React from "react";

const PageHeaderContext = React.createContext({
    title: "No Title",
    setTitle: () => {}
});

export default PageHeaderContext;