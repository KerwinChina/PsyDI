import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

const lang = process.env.NEXT_PUBLIC_PSYDI_LANG || 'zh' // default to zh
var texts = {
  part1: '',
  part2: '',
  part3: '',
  part4: '',
  part5: '',
}
if (lang == 'zh') {
  texts.part1 = '出品，版权所有 © 2024'
  texts.part2 = '对话内容由 AI 大模型生成，请仔细甄别。如有任何问题和建议，请联系'
  texts.part3 = '邮箱'
  texts.part4 = '或访问'
  texts.part5 = 'GitHub 主页'
} else if (lang == 'en') {
  texts.part1 = ' produced, all rights reserved © 2024'
  texts.part2 = 'The conversation content is generated by a AI model, please carefully distinguish. If you have any questions and suggestions, please contact '
  texts.part3 = ' email'
  texts.part4 = ' or visit '
  texts.part5 = ' GitHub homepage'
}
export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      <ExternalLink href="https://github.com/opendilab">
        OpenDILab
      </ExternalLink>
      {texts.part1}
      <br />
      {texts.part2}
      <ExternalLink href="mailto:opendilab@pjlab.org.cn">
      {texts.part3}
      </ExternalLink>
      {texts.part4}
      <ExternalLink href="https://github.com/opendilab/PsyDI">
      {texts.part5}
      </ExternalLink>
    </p>
  )
}
