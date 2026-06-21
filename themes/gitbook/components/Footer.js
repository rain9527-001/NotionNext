import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

/**
 * 站点页脚
 * @param {*} param0
 * @returns
 */
const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-20 border p-2 rounded-lg bg:white dark:border-black dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'>
      <SocialButton />

      {/* 极简自定义版权信息，去除了爱心和多余的链接 */}
      <div className='flex justify-center py-1 text-gray-500 dark:text-gray-400'>
        <span>雨水科技生活 © {`${copyrightDate}`}</span>
      </div>

      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href={siteConfig('BEI_AN_LINK')} className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <BeiAnGongAn />
          <br />
        </>
      )}

      <span className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
      </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users' />{' '}
        <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </span>

      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
  )
}

export default Footer
