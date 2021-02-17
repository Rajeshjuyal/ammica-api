import { Injectable, HttpStatus } from '@nestjs/common';
import { AssignedSubject } from './assigned-subject.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssignedSubjectService {
  assignedsSubject: AssignedSubject[] = [];
  constructor(
    @InjectModel('AssignedSubject')
    private readonly assignedSubjectModel: Model<any>,
    @InjectModel('Subject') private readonly subjectModel: Model<any>,
    @InjectModel('Section') private readonly sectionModel: Model<any>,
  ) {}
  public async create(AssignedSubjectdata: AssignedSubject) {
    var assignedsSubject = await this.assignedSubjectModel.create(
      AssignedSubjectdata,
    );
  }

  public async findAll() {
    var assignedSubjects = await this.assignedSubjectModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: assignedSubjects,
    };
  }

  public async findOne(id: string) {
    var assignedSubject = await this.assignedSubjectModel.findById(id);

    return {
      response_code: HttpStatus.OK,
      response_data: assignedSubject,
    };
  }
  public async findSubject(id: string) {
    var assignedSubject = await this.assignedSubjectModel.find({ subject: id });
    return {
      response_code: HttpStatus.OK,
      response_data: assignedSubject,
    };
  }
  public async findSection(id: string) {
    var assignedSubject = await this.assignedSubjectModel.find({ section: id });
    return {
      response_code: HttpStatus.OK,
      response_data: assignedSubject,
    };
  }
  public async findTeacher(id: string) {
    var assignedSubject = await this.assignedSubjectModel.find({ teacher: id });
    return {
      response_code: HttpStatus.OK,
      response_data: assignedSubject,
    };
  }

  public async update(id: string, AssignedSubjectdata: AssignedSubject) {
    var assignedsSubject = await this.assignedSubjectModel.findByIdAndUpdate(
      id,
      AssignedSubjectdata,
    );
    return {
      response_code: HttpStatus.OK,
      response_data: assignedsSubject,
    };
  }

  public async remove(id: string) {
    var assignedsSubject = await this.assignedSubjectModel.findByIdAndDelete(
      id,
    );
    assignedsSubject.remove;
    return {
      response_code: HttpStatus.OK,
      response_data: assignedsSubject,
    };
  }
}
