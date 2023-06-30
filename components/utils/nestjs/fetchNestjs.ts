import { NestJS } from "../../lib/typings";

export default async function fetchNestjs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/nestjs/getNestjs`
  );
  const data = await res.json();
  const nestjs: NestJS[] = data.nestjs;

  return nestjs;
}
