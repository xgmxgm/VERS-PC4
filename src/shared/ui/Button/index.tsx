import sytles from './Button.module.scss'

interface IProps {
	style: 1 | 2
}

export const Button = ({ style = 1 }: IProps) => {
	if (style == 1) {
		return (
			<button className={sytles.Button_1}>
				<p>press</p>
			</button>
		)
	} else {
		return (
			<button className={sytles.Button_2}>
				<p>press</p>
			</button>
		)
	}
}
