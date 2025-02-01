import { FC } from 'react';

// UI Icons
import Close from 'Public/assets/close.svg';
import Menu from 'Public/assets/menu.svg';

// Social Icons
import Email from 'Public/assets/email.svg';
import Github from 'Public/assets/github.svg';
import Linkedin from 'Public/assets/linkedin.svg';
import Youtube from 'Public/assets/youtube.svg';

// Technology Icons
import Angular from 'Public/assets/angular.svg';
import Csharp from 'Public/assets/csharp.svg';
import Javascript from 'Public/assets/javascript.svg';
import Nextjs from 'Public/assets/nextjs.svg';
import Playwright from 'Public/assets/Playwright.svg';
import Python from 'Public/assets/python.svg';
import Stenciljs from 'Public/assets/stenciljs.svg';
import Storybook from 'Public/assets/storybook.svg';
import Typescript from 'Public/assets/typescript.svg';

export interface IconProps {
	icon:
		| 'CLOSE'
		| 'MENU'
		| 'GITHUB'
		| 'LINKEDIN'
		| 'YOUTUBE'
		| 'EMAIL'
		| 'JAVASCRIPT'
		| 'TYPESCRIPT'
		| 'ANGULAR'
		| 'STENCILJS'
		| 'NEXTJS'
		| 'STORYBOOK'
		| 'PLAYWRIGHT'
		| 'PYTHON'
		| 'CSHARP';
}

const Icon: FC<IconProps> = ({ icon }) => {
	let Icon = () => <svg />;

	switch (icon) {
		case 'CLOSE':
			Icon = Close;
			break;
		case 'MENU':
			Icon = Menu;
			break;

		case 'GITHUB':
			Icon = Github;
			break;
		case 'LINKEDIN':
			Icon = Linkedin;
			break;
		case 'YOUTUBE':
			Icon = Youtube;
			break;
		case 'EMAIL':
			Icon = Email;
			break;

		case 'JAVASCRIPT':
			Icon = Javascript;
			break;
		case 'TYPESCRIPT':
			Icon = Typescript;
			break;
		case 'ANGULAR':
			Icon = Angular;
			break;
		case 'STENCILJS':
			Icon = Stenciljs;
			break;
		case 'NEXTJS':
			Icon = Nextjs;
			break;
		case 'STORYBOOK':
			Icon = Storybook;
			break;
		case 'PLAYWRIGHT':
			Icon = Playwright;
			break;
		case 'PYTHON':
			Icon = Python;
			break;
		case 'CSHARP':
			Icon = Csharp;
			break;

		default:
			break;
	}

	return (
		<>
			<Icon />
		</>
	);
};

export { Icon };
