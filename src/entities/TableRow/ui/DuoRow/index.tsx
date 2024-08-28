import { LED } from '@/shared/ui/LED'
import styles from './DuoRow.module.scss'
import { Button } from '@/shared/ui/Button'
import { FC } from 'react'

export const DuoRow: FC<DuoRowType> = ({ LED_1, info_1, LED_2, info_2 }) => {
	return (
		<div className={styles.RowCard}>
			<div className={styles.RowCardMark}>
				<p></p>
			</div>
			<div className={styles.RowCardContent}>
				<div className={styles.LeftRow}>
					<LED isLight={LED_1} />
					<p>{info_1}</p>
				</div>
				<div className={styles.RightRow}>
					<LED isLight={LED_2} />
					<Button style={2} />
					<p>{info_2}</p>
				</div>
			</div>
		</div>
	)
}
