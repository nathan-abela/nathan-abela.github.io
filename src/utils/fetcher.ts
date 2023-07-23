export const fetcher = async (url: string) => {
	const apiUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api${url}`;
	const res = await fetch(apiUrl);
	return res.json();
};
