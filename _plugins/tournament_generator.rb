module Jekyll
  class TournamentGenerator < Jekyll::Generator
    def generate(site)
      # Find Tournament Page
      tournament = site.pages.find { |page| page.name == 'tournaments.html'}

      # Inject data into template
      # liquid doesn't seem to support hashes or objects, so we need to create a double array instead
      # Object example:
      # [
      #   [
      #     name,
      #     location,
      #     level,
      #     gender,
      #     type,
      #     start_date,
      #     end_date,
      #     notes
      #   ]
      # ]
      
      tournament_data = []

      site.data['tournaments'].each do |data_file_name, data|
        data.each do |t|
          # look into case sensitivity and similarly named columns
          tournament_data.push([
            t['Name'],
            t['Location'],
            t['Level'],
            t['Gender'],
            t['Type'],
            t['Start Date'],
            t['End Date'],
            t['Notes']
          ])
        end
      end

      tournament.data['tournaments'] = tournament_data

      ### TODO List
      # Make date objects that can be sorted in js
      # Add times if available
      # Filter only future dates
      # Do initial sort by date
      # Add links
      # Add tags for filtering
      
    end
  end
end
