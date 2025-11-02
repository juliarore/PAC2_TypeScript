// Interface que descriu les propietats d'un TODO
export interface StructureTodo {
  id: string;
  text: string;
  complete: boolean;
}

/**
 * @class Model
 *
 * Manages the data of the application.
 */

export class Todo implements StructureTodo {

  // Definim les propietats del model i el seu tipat
  id: string;
  text: string;
  complete: boolean;

  // Afegim tipat als paràmetres del constructor
  constructor({ text, complete = false }: { text: string; complete?: boolean }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  private uuidv4(): string {
    // Afegim ('' + [1e7] + ...) perquè TypeScript entengui que és una cadena, no un array
    return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
      ).toString(16)
    );
  }
}