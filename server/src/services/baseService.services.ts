import Counter from "../model/counterModel.model";
abstract class BaseService {
  public model: any;

  constructor(model: any) {
    this.model = model;
  }

  public getData = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      const data = `Hello`;
      resolve(data);
    });
  };

  public createRecord = (data: any, files: File[] | null): Promise<any> => {
    return new Promise<any>(async (resolve, reject) => {
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

      const record = new this.model({ ...data, id: seqid });

      recordItem = await record.save();

      resolve(recordItem);
    });
  };
}

export default BaseService;
