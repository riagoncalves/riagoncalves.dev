// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface IHash<T> {
  [index: string]: T;
}

type Data = {
  skills: IHash<string>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    skills: {
      'html': 'HTML',
      'css': 'CSS',
      'sass': 'Sass',
      'js': 'JavaScript',
      'ruby': 'Ruby',
      'rails': 'Ruby On Rails',
      'express': 'Express',
      'react': 'React',
      'gatsby': 'Gatsby',
      'next': 'NextJs',
      'webpack': 'Webpack',
      'kotlin': 'Kotlin',
      'java': 'Java',
      'sequelize': 'Sequelize',
      'postgresql': 'Postgresql',
      'wordpress': 'Wordpress',
      'git': 'Git'
    }
  })
}
