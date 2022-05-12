import { useEffect, useState } from 'preact/hooks';
import { h, FunctionComponent } from 'preact';
import { Meme, MemeProps } from './Meme/meme';

export interface AppProps {
	title: string;
}

export const App: FunctionComponent<{ title: string }> = ({ title = 'Hello, world!' }) => {
	const [memes, setMemes] = useState<Array<MemeProps>>([])

	useEffect(() => {
		(async () => {
			const response = await fetch('https://api.imgflip.com/get_memes');
			const result = await response.json();
			setMemes(result.data.memes);
		})();
	}, []);

	return (
		<main>
			<h1>{title}</h1>
			{memes.map(meme => (<Meme key={meme.id} {...meme} />))}
		</main>
	);
};
