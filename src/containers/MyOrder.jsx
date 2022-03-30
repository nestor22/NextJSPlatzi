import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import OrderItem from '../components/OrderItem';
import flechita from '@icons/flechita.svg'

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {

	const { state } = useContext(AppContext);


	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className={styles['primary-button']}>
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
