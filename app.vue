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
	</Head>
	<NuxtPwaAssets />
	<main>
		<NuxtPage />
	</main>
</template>
