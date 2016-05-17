class ChatController < FayeRails::Controller
  channel "/chat" do
    subscribe do
      Rails.logger.debug "=================================="
      Rails.logger.debug "Received on #{channel}: #{inspect}"
      Rails.logger.debug "=================================="
    end
  end
end
