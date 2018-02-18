type MartialStatus = "single" | "divorced" | "married" | "widowed";

interface Person {
  firstName: string;
  lastName: string;
  dob: number;
  email?: string;
  phone?: {
    mobile?: number;
    home?: number;
  };
  MartialStatus?: MartialStatus;
}

type Employee = Person & { jobRole: string };
type Manager = Employee & { reports: Employee[] };

enum Generation {
  X,
  Y,
  Z,
  Unknown,
}

function categoriseGeneration(person: Person): Generation {
  if (person.dob >= 1995) {
    return Generation.Z;
  } else if (person.dob >= 1980) {
    return Generation.Y;
  } else if (person.dob >= 1965) {
    return Generation.X;
  }
  return Generation.Unknown;
}
