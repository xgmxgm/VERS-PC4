import styles from './SingleRow.module.scss'
import { LED } from '@/shared/ui/LED'
import { FC } from 'react'

export const SingleRow: FC<SingleRowType> = ({ LED_1, info }) => {
	return (
		<div className={styles.RowCard}>
			<div className={styles.RowCardMark}>
				<p>o</p>
			</div>
			<div className={styles.RowCardContent}>
				<div className={styles.LeftRow}></div>
				<div className={styles.RightRow}>
					<LED isLight={LED_1} />
					<p>{info}</p>
				</div>
			</div>
		</div>
	)
}
