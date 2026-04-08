
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Lato } from 'next/font/google'
import { Montserrat } from "next/font/google";

const lato = Lato({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-lato',
});

const montserrat = Montserrat({
	weight: ['400', '600', '700', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html suppressHydrationWarning>
			<body className={`${lato.variable} ${montserrat.variable}`}>
				<Provider>
					{children}
				</Provider>
			</body>
		</html>
	);
}