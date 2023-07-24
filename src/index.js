const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function objDescriptor(obj) {
  const { special } = obj;
  for (let i = 0; i < special.length; i += 1) {
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;
}

objDescriptor(character);
