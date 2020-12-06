import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-items">
              <div className="left-block">
              <img style={styles.image}/>

             </div>
            <div className="right-block">
                <div style={{ fontSize: 25}}>Phone</div>
                <div style={{color:'#777'}}>Ksh 4000</div>
                <div style={{color:'#777'}}>Qty = 1</div>

                <div className="cart-item-actions">
                    {/* Buttons */}

                </div>

            </div>

            </div>
                
                

        
        );
    }
}

 const styles = {
    image:{
        height:110,
        width: 90,
        borderRadius:4,
        background: '#ccc',
    }
}
export default CartItem;