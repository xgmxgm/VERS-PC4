import styles from './LED.module.scss'

interface IProps {
	isLight: boolean
}

export const LED = ({ isLight }: IProps) => {
	return (
		<div className={styles.LED}>
			<div
				className={styles.Light}
				style={{ backgroundColor: isLight ? 'green' : 'gray' }}
			></div>
		</div>
	)
}
