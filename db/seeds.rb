# db/seeds.rb

# Crear o encontrar una organización
organization = Decidim::Organization.find_or_create_by!(name: 'Mi Organización') do |org|
    org.default_locale = 'es'
    org.available_locales = ['es']
    org.host = 'localhost'
    org.reference_prefix = 'MO'  # Asigna un valor adecuado para tu prefijo de referencia
  end
  
  # Asegurarse de que tos_version tenga un valor
  organization.tos_version ||= Time.current
  organization.save!
  
  # Crear o encontrar un usuario administrador del sistema
  Decidim::System::Admin.find_or_create_by!(email: 'admin@example.org') do |admin|
    admin.password = 'Acomplex_password123!'
    admin.password_confirmation = 'Acomplex_password123!'
    admin.tos_agreement = true
  end
  
  # Crear o encontrar un usuario en la organización creada
  Decidim::User.find_or_create_by!(email: 'marvin@example.com', decidim_organization_id: organization.id) do |user|
    user.name = 'Marvin'
    user.nickname = 'marvin'
    user.password = 'Acomplex_password123!'
    user.password_confirmation = 'Acomplex_password123!'
    user.tos_agreement = true
    user.admin = true
    user.accepted_tos_version = organization.tos_version + 1.hour
  end
  
  # Lógica adicional para otras semillas específicas de Decidim
  Decidim.seed!
  