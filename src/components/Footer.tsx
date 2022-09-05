import ShareButton from '@/components/Buttons/ShareButton'
import Container from './Container'

const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-col items-center justify-between gap-10 border-t border-slate-400/20 pt-10 pb-20 sm:flex-row">
        <p className="flex items-center gap-3 text-[0.8125rem] leading-6 text-slate-900">
          <svg width="30" height="18" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z"
              fill="#38BDF8"
            />
          </svg>
          <span>
            By the makers of{' '}
            <a href="https://tailwindcss.com" className="font-semibold">
              tailwindcss
            </a>
          </span>
        </p>
        <ShareButton full />
      </footer>
    </Container>
  )
}

export default Footer
