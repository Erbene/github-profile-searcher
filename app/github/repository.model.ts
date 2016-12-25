/**
 * Created by Maia on 25/12/16.
 * Model was created from response given by Github API v3 from "List your repositories".
 * More information at:
 * @link https://developer.github.com/v3/repos/
 */
import { User } from './user.model';

export class Repository {
  constructor(
    public id: number,
    public owner: User,
    public name: string,
    public full_name: string,
    public description: string,
    public isPrivate: boolean,
    public fork: boolean,
    public url: string,
    public html_url: string,
    public archive_url: string,
    public assignees_url: string,
    public blobs_url: string,
    public branches_url: string,
    public clone_url: string,
    public collaborators_url: string,
    public comments_url: string,
    public commits_url: string,
    public compare_url: string,
    public contents_url: string,
    public contributors_url: string,
    public deployments_url: string,
    public downloads_url: string,
    public events_url: string,
    public forks_url: string,
    public git_commits_url: string,
    public git_refs_url: string,
    public git_tags_url: string,
    public git_url: string,
    public hooks_url: string,
    public issue_comment_url: string,
    public issue_events_url: string,
    public issues_url: string,
    public keys_url: string,
    public labels_url: string,
    public language_url: string,
    public merges_url: string,
    public milestones_url: string,
    public mirror_url: string,
    public notifications_url: string,
    public pulls_url: string,
    public releases_url: string,
    public ssh_url: string,
    public stargazers_url: string,
    public statuses_url: string,
    public subscribers_url: string,
    public subscription_url: string,
    public svn_url: string,
    public tags_url: string,
    public teams_url: string,
    public trees_url: string,
    public homepage: string,
    public forks_count: number,
    public stargazers_count: number,
    public watchers_count: number,
    public size: number,
    public default_branch: string,
    public open_issues_count: number,
    public has_issues: boolean,
    public has_wiki: boolean,
    public has_pages: boolean,
    public has_downloads: boolean,
    public pushed_at: Date,
    public created_at: Date,
    public updated_at: Date
    //FIXME: missing `permissions` property
    //  "permissions": {
    //  "admin": false,
    //    "push": false,
    //    "pull": true
    //}

  ){}
  populate(obj){
    this.id = obj.id;
    let user = new User();
    user.populate(obj.owner);
    this.owner = user;
    this.name = obj.name;
    this.full_name = obj.full_name;
    this.description = obj.description;
    this.isPrivate = obj.isPrivate;
    this.fork = obj.fork;
    this.url = obj.url;
    this.html_url = obj.html_url;
    this.archive_url = obj.archive_url;
    this.assignees_url = obj.assignees_url;
    this.blobs_url = obj.blobs_url;
    this.branches_url = obj.branches_url;
    this.clone_url = obj.clone_url;
    this.collaborators_url = obj.collaborators_url;
    this.comments_url = obj.comments_url;
    this.commits_url = obj.commits_url;
    this.compare_url = obj.compare_url;
    this.contents_url = obj.contents_url;
    this.contributors_url = obj.contributors_url;
    this.deployments_url = obj.deployments_url;
    this.downloads_url = obj.downloads_url;
    this.events_url = obj.events_url;
    this.forks_url = obj.forks_url;
    this.git_commits_url = obj.git_commits_url;
    this.git_refs_url = obj.git_refs_url;
    this.git_tags_url = obj.git_tags_url;
    this.git_url = obj.git_url;
    this.hooks_url = obj.hooks_url;
    this.issue_comment_url = obj.issue_comment_url;
    this.issue_events_url = obj.issue_events_url;
    this.issues_url = obj.issues_url;
    this.keys_url = obj.keys_url;
    this.labels_url = obj.labels_url;
    this.language_url = obj.language_url;
    this.merges_url = obj.merges_url;
    this.milestones_url = obj.milestones_url;
    this.mirror_url = obj.mirror_url;
    this.notifications_url = obj.notifications_url;
    this.pulls_url = obj.pulls_url;
    this.releases_url = obj.releases_url;
    this.ssh_url = obj.ssh_url;
    this.stargazers_url = obj.stargazers_url;
    this.statuses_url = obj.statuses_url;
    this.subscribers_url = obj.subscribers_url;
    this.subscription_url = obj.subscription_url;
    this.svn_url = obj.svn_url;
    this.tags_url = obj.tags_url;
    this.teams_url = obj.teams_url;
    this.trees_url = obj.trees_url;
    this.homepage = obj.homepage;
    this.forks_count = obj.forks_count;
    this.stargazers_count = obj.stargazers_count;
    this.watchers_count = obj.watchers_count;
    this.size = obj.size;
    this.default_branch = obj.default_branch;
    this.open_issues_count = obj.open_issues_count;
    this.has_issues = obj.has_issues;
    this.has_wiki = obj.has_wiki;
    this.has_pages = obj.has_pages;
    this.has_downloads = obj.has_downloads;
    this.pushed_at = new Date(obj.pushed_at);
    this.created_at = new Date(obj.created_at);
    this.updated_at = new Date(obj.updated_at);
  }
}
