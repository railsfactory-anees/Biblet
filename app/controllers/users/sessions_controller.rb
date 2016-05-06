class Users::SessionsController < Devise::SessionsController
  before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
   self.resource = resource_class.new(sign_in_params)
   clean_up_passwords(resource)
   respond_with(resource, serialize_options(resource))

 end

  # POST /resource/sign_in
  def create
  #   super
  puts "inside create"
  self.resource = warden.authenticate!(auth_options)
  set_flash_message(:notice, :signed_in) if is_flashing_format?
  sign_in(resource_name, resource)
  yield resource if block_given?
  respond_with resource, location: after_sign_in_path_for(resource)
end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  protected

  def sign_in_params
    devise_parameter_sanitizer.sanitize(:sign_in)
  end

  def auth_options
    { scope: resource_name, recall: "#{controller_path}#new" }
  end

  def serialize_options(resource)
    methods = resource_class.authentication_keys.dup
    methods = methods.keys if methods.is_a?(Hash)
    methods << :password if resource.respond_to?(:password)
    { methods: methods, only: [:password] }
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.for(:sign_in) << :attribute
  end
end
