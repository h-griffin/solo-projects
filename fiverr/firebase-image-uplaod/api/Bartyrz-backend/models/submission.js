class Submission {
  constructor(
    id,
    itemContribution,
    firstName,
    lastName,
    email,
    duration,
    itemTitle,
    itemDesc,
    contentProvider,
    downloadUrlsArray,
    imagesId,
  ) {
    this.id = id;
    this.itemContribution = itemContribution;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.itemTitle = itemTitle;
    this.itemDesc = itemDesc;
    this.duration = duration;
    this.contentProvider = contentProvider;
    this.downloadUrlsArray = downloadUrlsArray;
    this.imagesId = imagesId;
  }
}
