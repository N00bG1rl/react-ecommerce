import styles from './Card.module.css'

function Card(props) {
	return <figure className={styles.card}>{props.children}</figure>
}

export default Card
