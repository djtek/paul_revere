module AnnouncementsHelper
  def announcement_hidden?(announcement)
    cookies["#{dom_id(announcement)}"] == "hidden"
  end

  def current_announcement
    @current_announcement ||= Announcement.current
  end
end
