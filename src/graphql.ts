
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum JobPublishStatus {
    draft = "draft",
    published = "published",
    archived = "archived"
}

export class CreateJobInput {
    label: string;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills?: Nullable<Nullable<number>[]>;
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
}

export class UpdateJobInput {
    id: number;
    label?: Nullable<string>;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills?: Nullable<Nullable<number>[]>;
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
}

export class Paging {
    first?: Nullable<number>;
    last?: Nullable<number>;
    after?: Nullable<ConnectionCursor>;
    before?: Nullable<ConnectionCursor>;
}

export class CreateSkillInput {
    label: string;
}

export class UpdateSkillInput {
    id: number;
    label: string;
}

export class Job {
    id: number;
    label: string;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills: Nullable<Skill>[];
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
    created_at: DateTime;
    updated_at: DateTime;
}

export class PageInfo {
    hasNextPage?: Nullable<boolean>;
    hasPreviousPage?: Nullable<boolean>;
    startCursor?: Nullable<ConnectionCursor>;
    endCursor?: Nullable<ConnectionCursor>;
}

export class JobConnection {
    pageInfo: PageInfo;
    edges: Nullable<JobEdge>[];
}

export class JobEdge {
    cursor: ConnectionCursor;
    node: Job;
}

export abstract class IQuery {
    abstract jobs(paging?: Nullable<Paging>): JobConnection | Promise<JobConnection>;

    abstract job(id: number): Nullable<Job> | Promise<Nullable<Job>>;

    abstract skills(paging?: Nullable<Paging>): SkillConnection | Promise<SkillConnection>;

    abstract skill(id: number): Nullable<Skill> | Promise<Nullable<Skill>>;
}

export abstract class IMutation {
    abstract createJob(createJobInput: CreateJobInput): Job | Promise<Job>;

    abstract updateJob(updateJobInput: UpdateJobInput): Job | Promise<Job>;

    abstract removeJob(id: number): Nullable<Job> | Promise<Nullable<Job>>;

    abstract createSkill(createSkillInput: CreateSkillInput): Skill | Promise<Skill>;

    abstract updateSkill(updateSkillInput: UpdateSkillInput): Skill | Promise<Skill>;

    abstract removeSkill(id: number): Nullable<Skill> | Promise<Nullable<Skill>>;
}

export class Skill {
    id: number;
    label: string;
    jobs: Nullable<Job>[];
    created_at: DateTime;
    updated_at: DateTime;
}

export class SkillConnection {
    pageInfo: PageInfo;
    edges: Nullable<SkillEdge>[];
}

export class SkillEdge {
    node: Skill;
    cursor: ConnectionCursor;
}

export type DateTime = any;
export type ConnectionCursor = any;
type Nullable<T> = T | null;
