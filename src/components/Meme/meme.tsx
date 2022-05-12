import { h, FunctionComponent } from 'preact';
import meme from './meme.module.css';

export interface MemeProps {
	box_count: number;
	height: number;
	id: string;
	name: string;
	url: string;
	width: number;
}

export const Meme: FunctionComponent<MemeProps> = (props) => {
	return (
		<div class={meme.meme}>
			<h5 class={meme.memeTitle}>{props.name}</h5>
			<img
				src={props.url}
				class={meme.memeImg}
				alt={props.name}
				title={props.name}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
}
