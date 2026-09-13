import 'dotenv/config';
import { PrismaClient } from '../src/core/prisma/generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.COCKROACH_URI! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.developerProject.deleteMany();
  await prisma.developerExperience.deleteMany();
  await prisma.developerSkill.deleteMany();
  await prisma.developerLinks.deleteMany();
  await prisma.developer.deleteMany();

  const developer = await prisma.developer.create({
    data: {
      name: 'Роман',
      description: 'Занимаюсь Fullstack-разработкой больше 2-ух лет. Часто приходилось изучать новые технологии в процессе работы и брать на себя ответсвенность за несколько проектов.Все проекты, с которыми работал как Fullstack, закрытые crm-системы - поэтому массив projects пустой',
      links: {
        create: {
          github: 'https://github.com/Romanded',
          hh: 'https://tomsk.hh.ru/resume/2a4e7d45ff0b3a0b950039ed1f4c687873346f'
        },
      },
      skills: {
        create: [
          { skill: 'HTML', experience: 3 },
          { skill: 'CSS', experience: 3 },
          { skill: 'SCSS', experience: 3 },
          { skill: 'JAVA_SCRIPT', experience: 3 },
          { skill: 'TYPE_SCRIPT', experience: 2 },
          { skill: 'NODE_JS', experience: 2 },
          { skill: 'VUE', experience: 2 },
          { skill: 'NUXT_JS', experience: 2 },
          { skill: 'NEST_JS', experience: 2 },
          { skill: 'MONGO_DB', experience: 2 },
          { skill: 'REDIS', experience: 2 },
          { skill: 'DOCKER', experience: 2 },
          { skill: 'NGINX', experience: 2 },
          { skill: 'GIT', experience: 2 },
        ],
      },
      experiences: {
        create: [
          {
            company: 'ООО "СОРОК ДВА"',
            post: 'Fullstack-разработчик',
            startDate: new Date('2023-10-19'),
            endDate: new Date('2026-02-27'),
            achievements: ['Реализовал JWT авторизацию', 'Разделил приложение на отдельные микросервисы', 'Переводил проект с express на nest js', 'Реализовал весь бекенд для отдельного проекта'],
          },
        ],
      },
    },
  });

  console.log('База заполнена');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
