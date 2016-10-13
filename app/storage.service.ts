import { Injectable } from '@angular/core';

/**
 * We should be able to change Storage provider with
 * minimum changes in the Application
 * StorageService will serve as an adapter
 */
@Injectable()
export class StorageService {

  constructor() {
  }

  saveObject() { }

  getObjectById(id: string) {

  }
}
