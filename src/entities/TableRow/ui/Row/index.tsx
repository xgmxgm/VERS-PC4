import { Button } from '@/shared/ui/Button'
import styles from './RowCard.module.scss'
import { LED } from '@/shared/ui/LED'
import { FC } from 'react'

export const Row: FC<RowType> = ({ mark, LED_1, LED_2, info }) => {
	return (
		<div className={styles.RowCard}>
			<div className={styles.RowCardMark}>
				<p>{mark}</p>
			</div>
			<div className={styles.RowCardContent}>
				<div className={styles.LeftRow}>
					<LED isLight={LED_1} />
					<Button style={1} />
				</div>
				<div className={styles.RightRow}>
					<LED isLight={LED_2} />
					<p>{info}</p>
				</div>
			</div>
		</div>
	)
}
