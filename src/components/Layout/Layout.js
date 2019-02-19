import React from 'react';

const Aux = (props) => {
    return <div>{props.children}</div>;
  };

const layout=(props)=>(
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;