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
                    <img alt='increase' className='.action-icons' src='https://www.flaticon.com/svg/static/icons/svg/54/54443.svg' />
                    <img alt='decrease' className='.action-icons' src='https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg' />
                    <img alt='delete' className='.action-icons' src='https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' />

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