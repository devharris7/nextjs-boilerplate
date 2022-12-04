import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Example',
  siteName: 'Example',
  description: 'Example',
  keywords: 'Example',
  /** Without additional '/' on the end */
  url: '',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  isBlog?: boolean;
  banner?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.keywords} name='keywords' />
      <meta content={meta.description} name='description' />
      <meta property='' name='header_title' content='CODING 官网'></meta>
      <meta name='image' property='og:image' content={meta.image} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      <link key='/favicon/favicon.ico' href='/favicon/favicon.ico' rel='icon' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}
