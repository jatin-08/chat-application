import Counter from "../model/counterModel.model";
abstract class BaseService {
  public model: any;

  constructor(model: any) {
    this.model = model;
  }

  abstract getDto(): any;

  public getData = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      const data = `Hello`;
      resolve(data);
    });
  };

  public createRecord = (data: any, files: File[] | null): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      Promise.resolve()
        .then(() => {
          return this.preproccess(data, files);
        })
        .then(async (res: any) => {
          let seqid: number;
          let recordItem: any = null;
          const seq: any = await Counter.findOneAndUpdate(
            { id: "incval" },
            { $inc: { seqId: 1 } },
            { new: true }
          ).exec();

          if (seq === null) {
            const newval = new Counter({ id: "incval", seqId: 1 });
            await newval.save();
            seqid = 1;
          } else {
            seqid = seq.seqId;
          }

          const record = new this.model({ ...res, id: seqid });

          recordItem = await record.save();

          return Promise.resolve(recordItem);
        })
        .then((final) => {
          return this.postproccess(final, files);
        })
        .then((result) => {
          resolve(result);
        })
        .catch((errors) => {
          console.log(errors);
          reject(errors);
        });
    });
  };

  public preproccess(data: any, files: File[] | null) {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }

  public postproccess(data: any, files: File[] | null) {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}

export default BaseService;
