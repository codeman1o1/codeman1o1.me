<template>
	<Head>
		<Link rel="icon" href="/favicon.ico" sizes="48x48" />
		<Link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
		<Meta
			name="theme-color"
			media="(prefers-color-scheme: light)"
			content="#f1f5f9"
		/>
		<Meta
			name="theme-color"
			media="(prefers-color-scheme: dark)"
			content="#1e293b"
		/>
		<Meta property="og:type" content="website" />
		<Meta property="og:title" content="codeman1o1.me" />
		<Meta property="og:url" content="https://codeman1o1.me" />
		<Meta property="og:image" content="https://codeman1o1.me/icon.png" />
		<Title>codeman1o1.me</Title>
	</Head>
	<NuxtPwaAssets />
	<main>
		<NuxtPage />
	</main>
</template>
