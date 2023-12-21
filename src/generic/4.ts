/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
}
class Component<T> {
  // створили узагальнений клас з типом Т
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  //передаєм тип з інтерфейса класу пейдж який наслідує класс Компонентс
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
