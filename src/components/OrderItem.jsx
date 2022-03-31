import React from 'react';
import Image from 'next/image';
import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
	return (
		<div className={styles.OrderItem}>
			<figure>
			{product?.images[0] && <Image src={product.images[0]} alt={product.title} width={240} height={240} />}
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<img src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
