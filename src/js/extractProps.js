//destructuring

export default function destructuringObject(object) {
  const result = [];

  for (const special of object.special) {
    const { description = "Описание недоступно", ...data } = special;
    result.push({ ...data, ...{ description } });
  }
  return result;
}
