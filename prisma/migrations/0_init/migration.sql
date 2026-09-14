-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('html', 'css', 'scss', 'javaScript', 'typeScript', 'nodeJS', 'vue', 'nuxtJS', 'react', 'nextJS', 'nestJS', 'prisma', 'graphQL', 'cockroachDB', 'postgreSQL', 'mongoDB', 'redis', 'docker', 'nginx', 'git');

-- CreateTable
CREATE TABLE "developers" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developer_links" (
    "id" STRING NOT NULL,
    "github" STRING,
    "gitlab" STRING,
    "bitbucket" STRING,
    "linkedin" STRING,
    "hh" STRING,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "developer_id" STRING NOT NULL,

    CONSTRAINT "developer_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developer_skills" (
    "id" STRING NOT NULL,
    "skill" "Skill" NOT NULL,
    "experience" INT4 NOT NULL,
    "description" STRING,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "developer_id" STRING NOT NULL,

    CONSTRAINT "developer_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developer_expiriences" (
    "id" STRING NOT NULL,
    "company" STRING NOT NULL,
    "post" STRING NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "achievements" STRING[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "developer_id" STRING NOT NULL,

    CONSTRAINT "developer_expiriences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developer_projects" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "link" STRING NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "developer_id" STRING NOT NULL,

    CONSTRAINT "developer_projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "developer_links_developer_id_key" ON "developer_links"("developer_id");

-- AddForeignKey
ALTER TABLE "developer_links" ADD CONSTRAINT "developer_links_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developer_skills" ADD CONSTRAINT "developer_skills_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developer_expiriences" ADD CONSTRAINT "developer_expiriences_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developer_projects" ADD CONSTRAINT "developer_projects_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "developers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
