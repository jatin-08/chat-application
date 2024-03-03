abstract class BaseService {
  public entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  public getData = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      const data = `Hello`;
      resolve(data);
    });
  };

  public createRecord = (model: any, files: File[] | null): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      resolve(model);
    });
  };
}

export default BaseService;
