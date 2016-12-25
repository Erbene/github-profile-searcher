/**
 * Created by Maia on 12/20/2016.
 * Model is created from response given by Github API v3 from "Get a single user request".
 * More information at:
 * @link https://developer.github.com/v3/users/
 */
export class User {
  constructor(
    public login?: string,
    public id?:number,
    public avatar_url?: string,
    public gravatar_id?: string,
    public url?: string,
    public html_url?: string,
    public followers_url?: string,
    public following_url?: string,
    public gists_url?: string,
    public starred_url?: string,
    public subscriptions_url?: string,
    public organizations_url?: string,
    public repos_url?: string,
    public events_url?: string,
    public received_events_url?: string,
    public type?: string,
    public site_admin?: boolean,
    public name?: string,
    public company?: string,
    public blog?: string,
    public location?: string,
    public email?: string,
    public hireable?: boolean,
    public bio?: string,
    public public_repos?: number,
    public public_gists?: number,
    public followers?: number,
    public following?: number,
    public created_at?: Date,
    public updated_at?: Date
  ){}
  populate(obj){
    this.login = obj.login;
    this.id = obj.id;
    this.avatar_url = obj.avatar_url;
    this.gravatar_id = obj.gravatar_id;
    this.url = obj.url;
    this.html_url = obj.html_url;
    this.followers_url = obj.followers_url;
    this.following_url = obj.following_url;
    this.gists_url = obj.gists_url;
    this.starred_url = obj.starred_url;
    this.subscriptions_url = obj.subscriptions_url;
    this.organizations_url = obj.organizations_url;
    this.repos_url = obj.repos_url;
    this.events_url = obj.events_url;
    this.received_events_url = obj.received_events_url;
    this.type = obj.type;
    this.site_admin = obj.site_admin;
    this.name = obj.name;
    this.company = obj.company;
    this.blog = obj.blog;
    this.location = obj.location;
    this.email = obj.email;
    this.hireable = obj.hireable;
    this.bio = obj.bio;
    this.public_repos = obj.public_repos;
    this.public_gists = obj.public_gists;
    this.followers = obj.followers;
    this.following = obj.following;
    this.created_at = new Date(obj.created_at);
    this.updated_at = new Date(obj.updated_at);
  }
}
