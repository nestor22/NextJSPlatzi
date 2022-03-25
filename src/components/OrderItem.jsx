import React from 'react';
import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
	return (
		<div className={styles.OrderItem}>
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
