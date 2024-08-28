import styles from './EmptyRow.module.scss'

export const EmptyRow = () => {
	return (
		<div className={styles.RowCard}>
			<div className={styles.RowCardMark}>
				<p>o</p>
			</div>
			<div className={styles.RowCardContent}></div>
		</div>
	)
}
