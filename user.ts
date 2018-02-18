type Permission = "publish" | "modify" | "delete";
type StringOrNull = string | null;

interface Logger {
  log(): StringOrNull;
}

abstract class User implements Logger {
  protected permissions: Permission[];
  private firstName: string;
  private surname: string;

  constructor(firstName: string, surname: string) {
    this.firstName = firstName;
    this.surname = surname;
  }

  get name() {
    return `${this.firstName} ${this.surname}`;
  }

  public log(): StringOrNull {
    return this.name;
  }
}

// tslint:disable-next-line:max-classes-per-file
class Publisher extends User {
  constructor(firstName: string, surname: string) {
    super(firstName, surname);
    this.permissions = ["publish", "modify", "delete"];
  }

  public log(): StringOrNull {
    return null;
  }
}