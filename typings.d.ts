interface Project {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "project";
  title: string;
  price: number;
  github: string;
  live: string;
  stack_a: string;
  stack_b: string;
  stack_c: string;
  stack_d: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: Description[];
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

interface Description {
  _key: string;
  _type: string;
  children: [];
  style: "normal";
}
