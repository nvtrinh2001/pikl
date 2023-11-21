import { z } from "zod"

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectSchema>

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "microservice-demo",
      link: "https://github.com/nvtrinh2001/microservice-demo",
      description: "Demonstration of microservices, with grpc and clean architecture (DDD)"
    },
    {
      repo: "placemark-hapi",
      link: "https://github.com/nvtrinh2001/placemark-hapi",
      description: "API for Travisor - a travel application"
    },
    {
      repo: "placemark-svelte",
      link: "https://github.com/nvtrinh2001/placemark-svelte",
      description: "Frontend for Travisor - a travel application"
    },
    {
      repo: "HomestayBE",
      link: "https://github.com/software-engineering-2022-2/HomestayFE",
      description: "API for a homestay application"
    },
    {
      repo: "file-station",
      link: "https://github.com/network-programming-2022-2/file-station",
      description: "An application for sharing files P2P"
    },
    {
      repo: "hardhat-nft-marketplace",
      link: "https://github.com/nvtrinh2001/hardhat-nft-marketplace",
      description: "A decentralised marketplace for NFTs"
    },
  ]
}
